const joinRequest = async(req,res) => {
    try {
        const team = await Team.findById(req.params.teamId);
        if (!team) return res.status(404).json({ error: 'Team not found' });

        // Check if the team is already full
        if (team.members.length >= team.maxPlayers) {
            return res.status(400).json({ error: 'Team is already full' });
        }

        // Check if user has already requested to join
        const existingRequest = team.requests.find(request => request.userId.toString() === req.user.id);
        if (existingRequest) return res.status(400).json({ error: 'Request already sent' });

        team.requests.push({ userId: req.user.id });
        await team.save();
        res.status(200).json({ message: 'Join request sent successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


const removeRequest = async(req,res) => {
    try {
        const team = await Team.findById(req.params.teamId);
        if (!team) return res.status(404).json({ error: 'Team not found' });

        const request = team.requests.find(r => r.userId.toString() === req.params.userId);
        if (!request) return res.status(404).json({ error: 'Request not found' });

        // Check if the team is already full
        if (team.members.length >= team.maxPlayers) {
            return res.status(400).json({ error: 'Team is already full' });
        }

        // Update request status to approved or rejected
        request.status = req.body.status; // 'approved' or 'rejected'

        if (req.body.status === 'approved') {
            team.members.push(req.params.userId); // Add user to team members if approved

            // If the team is now full, remove pending requests
            if (team.members.length >= team.maxPlayers) {
                team.requests = []; // Clear all pending requests
            }
        }

        await team.save();
        res.status(200).json({ message: 'Request updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports={
    joinRequest,removeRequest
}
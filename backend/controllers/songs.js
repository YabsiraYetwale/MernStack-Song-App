import mongoose from 'mongoose';
import songModel from '../models/songModel.js';

export const createSong = async (req, res) => {
    const { title, genre, imgUrl,audio, singer } = req.body;

    const newsongModel = new songModel({ title, genre, imgUrl,audio, singer})

    try {
        await newsongModel.save();

        res.status(201).json(newsongModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSongs = async (req, res) => { 
    try {
        const songModels = await songModel.find();
                
        res.status(200).json(songModels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSong = async (req, res) => { 
    const { id } = req.params;

    try {
        const song = await songModel.findById(id);
        
        res.status(200).json(song);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateSong = async (req, res) => {
    const { id } = req.params;
    const { title, genre, imgUrl,audio, singer} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No song with id: ${id}`);

    const updatedSong = { title, genre, imgUrl,audio, singer, _id: id };

    await songModel.findByIdAndUpdate(id, updatedSong, { new: true });

    res.json(updatedSong);
}

export const deleteSong = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No song with id: ${id}`);

    await songModel.findByIdAndRemove(id);

    res.json({ message: "Song deleted successfully." });
}



import { Request, Response } from "express";
import { Games } from "../models/Games";
//import { games } from '../data/games';

// @desc    Get all games
// @route   GET /api/v1/games
// @access  Public
export const getGames = async (req: Request, res: Response) => {
  try {
    const games = await Games.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Create a game
// @route   POST /api/v1/games
// @access  Private
export const createGame = async (req: Request, res: Response) => {
  try {
    const newGame = new Games(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get a game
// @route   GET /api/v1/games/:id
// @access  Public
export const getGame = async (req: Request, res: Response) => {
  try {
    const game = await Games.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update a game
// @route   PUT /api/v1/games/:id
// @access  Private
export const updateGame = async (req: Request, res: Response) => {
  try {
    const game = await Games.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete a game
// @route   DELETE /api/v1/games/:id
// @access  Private
export const deleteGame = async (req: Request, res: Response) => {
  try {
    const game = await Games.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json({ message: "Game deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

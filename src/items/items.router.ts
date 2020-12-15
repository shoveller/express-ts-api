/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';
import * as ItemService from './items.service'
import { Items } from './items.interface'

/**
 * Router Definition
 */
export const itemsRouter = express.Router()

/**
 * Controller Definitions
 */

// GET items/
itemsRouter.get('/', async (req, res) => {
	try {
		const items: Items = await ItemService.findAll()

		res.status(200).send(items)
	} catch(e) {
		res.status(404).send(e.message)
	}
})

// GET items/:id
itemsRouter.get('/:id', async (req, res) => {
	const id = parseInt(req.params.id, 10)

	try {
		const item = await ItemService.find(id)

		res.status(200).send(item)
	} catch (e) {
		res.status(404).send(e.message)
	}
})

// POST items/
itemsRouter.post('/', async (req, res) => {
	try {
		const {item} = req.body
		await ItemService.create(item)

		res.sendStatus(201)
	} catch (e) {
		res.status(404).send(e.message)
	}
})

// PUT items/
itemsRouter.put('/', async (req, res) => {
	try {
		const {item} = req.body
		await ItemService.update(item)

		res.sendStatus(200)
	} catch (e) {
		res.status(500).send(e.message)
	}
})

// DELETE items/:id
itemsRouter.delete('/:id', async(req, res) => {
	try{
		const id = parseInt(req.params.id, 10)
		await ItemService.remove(id)

		res.sendStatus(200)
	}catch(e) {
		res.status(500).send(e.message)
	}
})

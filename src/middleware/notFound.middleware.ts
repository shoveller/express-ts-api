import { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
	const message = '리소스를 찾을 수 없습니다'

	res.status(404).send(message)
}

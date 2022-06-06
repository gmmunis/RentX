import { CarImage } from "../entities/CarImage";

interface IUploadCarsImageRepository {
    create(car_id: string, image_name: string): Promise<CarImage>;
}

export { IUploadCarsImageRepository };
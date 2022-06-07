import { container } from "tsyringe";
import { UsersRepository } from "@modules/accounts/repositories/UsersRepository";
import { CategoriesRepository } from "@modules/cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "@modules/cars/infra/typeorm/repositories/ICategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/SpecificationsRepository";
import { IUsersRepository } from "@modules/accounts/infra/typeorm/repositories/IUsersRepository";
import { ISpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/ISpecificationsRepository";
import { ICarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/ICarsImagesRepository";
import { CarsImagesRepository } from "@modules/cars/repositories/CarsImagesRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<ICarsImagesRepository>("CarsImagesRepository", CarsImagesRepository);


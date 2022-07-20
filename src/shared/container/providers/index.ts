import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/Implementations/DayjsDateProvider";
import { IMailProvider } from "./Mailprovider/IMailProvider";
import { EtherealMailProvider } from "./Mailprovider/implementations/EtherealMailProvider";
import { LocalStorageProvider } from "./StorageProvider/implementations/LocalStorageProvider";
import { IStorageProvider } from "./StorageProvider/IStorageProvider";

container.registerSingleton<IDateProvider>("DayjsDateProvider", DayjsDateProvider);
container.registerInstance<IMailProvider>("EtherealMailProvider", new EtherealMailProvider());
container.registerSingleton<IStorageProvider>("StorageProvider", LocalStorageProvider);
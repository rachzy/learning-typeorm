import { DataSource } from "typeorm";
import { User } from "../entity/User";

export async function getUserById(dataSource: DataSource, id: number) {
    const userRepository = dataSource.getRepository(User);

    return userRepository.findOneBy({id});
}
import { DataSource } from "typeorm";
import { User } from "../entity/User";

export async function getUsers(dataSource: DataSource): Promise<User[]> {
    const userRepository = dataSource.getRepository(User);

    return await userRepository.find();
}
import { DataSource } from "typeorm";
import { Photo } from "../entity/Photo";

export async function getPhotoById(dataSource: DataSource, id: number) {
  const photoRepository = dataSource.getRepository(Photo);

  return photoRepository.findOne({
    where: {
      id,
    },
    relations: {
      metadata: true,
    },
  });
}

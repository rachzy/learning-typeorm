import { DataSource } from "typeorm";
import { Photo } from "../entity/Photo";
import { PhotoMetadata } from "../entity/PhotoMetadata";

export async function createPhotoMetadata(dataSource: DataSource, photo: Photo): Promise<PhotoMetadata> {
  const photoMetadataRepository = dataSource.getRepository(PhotoMetadata);

  const metadata = new PhotoMetadata();
  metadata.height = 640
  metadata.width = 480
  metadata.compressed = true
  metadata.comment = "cybershoot"
  metadata.orientation = "portrait"
  metadata.photo = photo // this way we connect them

  await photoMetadataRepository.save(metadata);
  return metadata;
}

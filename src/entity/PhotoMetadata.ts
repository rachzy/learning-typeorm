import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  width: number;

  @Column("int")
  height: number;

  @Column()
  orientation: string;

  @Column("boolean")
  compressed: boolean;

  @Column()
  comment: string;

  @OneToOne(() => Photo, (photo) => photo.metadata)
  @JoinColumn()
  photo: Photo;
}

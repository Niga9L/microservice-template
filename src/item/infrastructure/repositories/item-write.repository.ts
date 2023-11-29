import { DataSource, Repository } from 'typeorm';

import { ItemEntity } from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemWriteRepository extends Repository<ItemEntity> {
  constructor(private dataSource: DataSource) {
    super(ItemEntity, dataSource.createEntityManager());
  }

  async getById(id: number) {
    return this.findOne({ where: { id } });
  }
  async deleteById(item: ItemEntity) {
    return this.delete(item.id);
  }
}

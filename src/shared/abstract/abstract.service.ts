import { Repository, DeepPartial } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export abstract class AbstractService<T> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<T> {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    return entity;
  }

  async create(createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async update(id: number, updateDto: DeepPartial<T>): Promise<T> {
    const entity = await this.findOne(id);
    this.repository.merge(entity, updateDto);
    return this.repository.save(entity);
  }

  async delete(id: number): Promise<void> {
    const entity = await this.findOne(id);
    await this.repository.remove(entity);
  }
}

import { Repository, ObjectLiteral, FindManyOptions } from 'typeorm';

export abstract class AbstractService<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  async findAll(conditions?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(conditions);
  }

  async findOne(conditions: any, relations?: string[]): Promise<T> {
    return this.repository.findOne({ where: conditions, relations });
  }

  async create(data: any): Promise<T> {
    return this.repository.save(data);
  }

  async update(conditions: any, data: any): Promise<T> {
    await this.repository.update(conditions, data);
    return this.findOne(conditions);
  }

  async remove(id: any): Promise<any> {
    const deleted = await this.repository.delete(id);

    if (deleted.affected > 0) return { message: `record deleted successfully` };
    else return { message: 'record not found' };
  }
}

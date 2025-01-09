import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  // Create a new student
  async createStudent(studentData: Partial<Student>): Promise<Student> {
    const student = this.studentRepository.create(studentData);
    return this.studentRepository.save(student);
  }

  // Get all students
  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async updateStudent(id: number, studentData: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, studentData);
    return this.studentRepository.findOneBy({ id });
  }
  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
  
}

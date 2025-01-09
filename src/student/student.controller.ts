import { Controller, Get, Post, Put,Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(studentData);
  }

  @Get()
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() studentData: Partial<Student>,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, studentData);
  }
  @Delete(':id')
async deleteStudent(@Param('id') id: number): Promise<void> {
  return this.studentService.deleteStudent(id);
}

}

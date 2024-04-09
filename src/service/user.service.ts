import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UserService {
  private readonly baseUrl = 'https://reqres.in/api';

  async getUsers() {
    const response = await axios.get(`${this.baseUrl}/users`);
    return response.data;
  }

  async getUserById(id: number) {
    const response = await axios.get(`${this.baseUrl}/users/${id}`);
    return response.data;
  }

  async createUser(data: any) {
    const response = await axios.post(`${this.baseUrl}/users`, data);
    return response.data;
  }

  async updateUser(id: number, data: any) {
    const response = await axios.put(`${this.baseUrl}/users/${id}`, data);
    return response.data;
  }

  async deleteUser(id: number) {
    const response = await axios.delete(`${this.baseUrl}/users/${id}`);
    return response.data;
  }

  async getUsersByPage(page: number) {
    const response = await axios.get(`${this.baseUrl}/users?page=${page}`);
    return response.data;
  }
}

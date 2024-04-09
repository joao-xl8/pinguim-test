import { Injectable } from '@nestjs/common';


@Injectable()
export class ImagesService {
  private readonly baseUrl = 'https://reqres.in/api';

  async getImages() {
    const response = await axios.get(`${this.baseUrl}/images`);
    return response.data;
  }

  async getImagesById(id: number) {
    const response = await axios.get(`${this.baseUrl}/images/${id}`);
    return response.data;
  }

  async createImages(data: any) {
    const response = await axios.post(`${this.baseUrl}/images`, data);
    return response.data;
  }

  async updateImages(id: number, data: any) {
    const response = await axios.put(`${this.baseUrl}/images/${id}`, data);
    return response.data;
  }

  async deleteImages(id: number) {
    const response = await axios.delete(`${this.baseUrl}/images/${id}`);
    return response.data;
  }

  async getImagesByPage(page: number) {
    const response = await axios.get(`${this.baseUrl}/image?page=${page}`);
    return response.data;
  }
}

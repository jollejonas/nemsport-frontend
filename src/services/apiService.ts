import axios from "axios";

interface ApiService<T> {
    fetchAll: () => Promise<T[]>;
    create: (data: Partial<T>) => Promise<T>;
    update: (id: number, data: Partial<T>) => Promise<T>;
    delete: (id: number) => Promise<void>;
}

function createApiService<T>(baseUrl: string): ApiService<T> {
    return {
        async fetchAll(): Promise<T[]> {
            const response = await axios.get<T[]>(baseUrl);
            return response.data
        },

        async create(data: Partial<T>): Promise<T> {
            const response = await axios.post<T>(baseUrl, data);
            return response.data;
        },

        async update(id: number, data: Partial<T>): Promise<T> {
            const response = await axios.put<T>(`${baseUrl}/${id}`, data);
            return response.data;
        },

        async delete(id: number): Promise<void> {
            await axios.delete(`${baseUrl}/${id}`)
        },
    };
}

export default createApiService
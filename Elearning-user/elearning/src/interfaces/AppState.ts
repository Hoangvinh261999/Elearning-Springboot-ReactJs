export interface AppState<T>{
    data: T[];
    loading: boolean;
    error: string | null;

}
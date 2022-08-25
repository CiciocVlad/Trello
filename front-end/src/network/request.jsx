
import { apiServerUrl } from "./const";
import axios from "axios";

export const createUser = async (user) => {
    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    const request = await fetch(`${apiServerUrl}/api/signups`, header);
    return await request.json();
}

export const login = async (user) => {
    const result = await axios.post("/api/login", user);
    return result;
}

export const hasSignned = async () => {
    const res = await axios.get("/api/login/hassignned");
    return res;
}

export const signout = async () => {
    const res = await axios.get("/api/login/signout");
    return res;
};

export const createList = async (list) => {
    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: list })
    }
    const request = await fetch(`${apiServerUrl}/api/lists`, header);
    return { data: request.json(), status: request.status }
}

export const createCard = async (card) => {
    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: card })
    }
    const request = await fetch(`${apiServerUrl}/api/cards`, header);
    return { data: request.json(), status: request.status }
}

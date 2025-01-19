import axios from 'axios';
import { agentConfig } from '../config/agent-config';

const BLAND_API_KEY = process.env.NEXT_PUBLIC_BLAND_API_KEY;
const BLAND_API_URL = 'https://api.bland.ai';
const BLAND_WEB_URL = 'https://web.bland.ai';

if (!BLAND_API_KEY) {
  throw new Error('BLAND_API_KEY is not set in environment variables');
}

interface AgentResponse {
  status: string;
  message?: string;
  agent_id?: string;
}

interface CallResponse {
  call_id: string;
  status: string;
  message?: string;
}

interface StreamResponse {
  status: string;
  message?: string;
  audio?: string;
}

export const createOrUpdateAgent = async (apiKey: string): Promise<AgentResponse> => {
  try {
    const response = await axios.post(`${BLAND_API_URL}/v1/agents`, {
      prompt: "You are a helpful AI assistant. Be concise and direct in your responses.",
      voice: "rachel",
      model: "gpt-4",
      language: "ENG",
      interruption_threshold: 100,
      max_duration: 30
    }, {
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json'
      }
    });

    console.log('Agent Response:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Agent Error:', {
        config: error.config,
        response: error.response?.data
      });
    }
    throw error;
  }
};

export const startCall = async (apiKey: string, agentId: string): Promise<CallResponse> => {
  try {
    const response = await axios.post(`${BLAND_API_URL}/v1/agents/${agentId}/authorize`, {}, {
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json'
      }
    });

    console.log('Authorization Response:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Authorization Error:', {
        config: error.config,
        response: error.response?.data
      });
    }
    throw error;
  }
};

export const streamAudio = async (
  callId: string, 
  audioData: string, 
  apiKey: string
): Promise<StreamResponse> => {
  try {
    const response = await axios.post(`${BLAND_API_URL}/v1/calls/${callId}/stream`, {
      audio: audioData
    }, {
      headers: {
        'Authorization': apiKey, // Update this header too
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Audio streaming error:', error.response?.data || error.message);
    throw new Error('Failed to stream audio');
  }
};

export async function createWebAgent(apiKey: string) {
  try {
    console.log('Creating new web agent...');
    const response = await fetch(`${BLAND_API_URL}/v1/agents`, {
      method: 'POST',
      headers: {
        'authorization': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(agentConfig)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create agent: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Created agent:', data);
    return data;
  } catch (error) {
    console.error('Error creating agent:', error);
    throw error;
  }
}

export async function getSessionToken(apiKey: string, agentId: string) {
  try {
    const response = await fetch(`${BLAND_WEB_URL}/v1/agents/${agentId}/authorize`, {
      method: 'POST',
      headers: {
        'authorization': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API responded with status: ${response.status} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error getting session token:', error);
    throw error;
  }
} 
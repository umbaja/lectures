const STORAGE_KEY = "course-participant";

export interface Participant {
  name: string;
  email: string;
  wantsCertificate: boolean;
  consentAt: string;
}

export function getParticipant(): Participant | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Participant;
  } catch {
    return null;
  }
}

export function isRegistered(): boolean {
  return getParticipant() !== null;
}

export function registerParticipant(data: { name: string; email: string; wantsCertificate: boolean }): Participant {
  const participant: Participant = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    wantsCertificate: data.wantsCertificate,
    consentAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(participant));
  } catch {
    // localStorage unavailable — participant stays registered only for this page view.
  }
  return participant;
}

export function clearParticipant() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage unavailable — nothing to clear.
  }
}

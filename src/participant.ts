const STORAGE_KEY = "course-participant";

export interface Participant {
  name: string;
  email: string;
  wantsCertificate: boolean;
  consentAt: string;
  /** Set once the participant clicks the confirmation link sent to their email. */
  emailVerified: boolean;
  /** Short public id for the shareable certificate link, assigned by the backend. */
  certificateId?: string;
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

/** Registered, but may still need to confirm their email before quizzes/certificate unlock. */
export function isRegistered(): boolean {
  return getParticipant() !== null;
}

/** Fully unlocked: registered AND confirmed their email. */
export function isFullyVerified(): boolean {
  return getParticipant()?.emailVerified === true;
}

export function registerParticipant(data: { name: string; email: string; wantsCertificate: boolean }): Participant {
  const existing = getParticipant();
  const email = data.email.trim().toLowerCase();
  const participant: Participant = {
    name: data.name.trim(),
    email,
    wantsCertificate: data.wantsCertificate,
    consentAt: new Date().toISOString(),
    // Re-registering with the same, already-verified email keeps that verified state.
    emailVerified: existing?.email === email ? existing.emailVerified : false,
    certificateId: existing?.email === email ? existing.certificateId : undefined,
  };
  saveParticipant(participant);
  return participant;
}

export function markEmailVerified(email: string, certificateId?: string) {
  const participant = getParticipant();
  if (!participant || participant.email !== email.trim().toLowerCase()) return;
  participant.emailVerified = true;
  if (certificateId) participant.certificateId = certificateId;
  saveParticipant(participant);
}

export function setCertificateId(certificateId: string) {
  const participant = getParticipant();
  if (!participant) return;
  participant.certificateId = certificateId;
  saveParticipant(participant);
}

function saveParticipant(participant: Participant) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(participant));
  } catch {
    // localStorage unavailable — participant stays registered only for this page view.
  }
}

export function clearParticipant() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage unavailable — nothing to clear.
  }
}

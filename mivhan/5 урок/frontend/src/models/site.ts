
import type { SiteDraft } from "./site-draft";

export interface Site extends SiteDraft{
    id: string,
    createdAt: string
    updatedAt:string
}
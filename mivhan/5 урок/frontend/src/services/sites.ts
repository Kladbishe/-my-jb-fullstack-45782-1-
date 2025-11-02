import axios from "axios"
import type { Site } from "../models/site"
import type { SiteDraft } from "../models/site-draft"

class SiteService {
    async getByRegionId(regionId: string): Promise<Site[]> {
        const { data } = await axios.get<Site[]>(`${import.meta.env.VITE_REST_SERVER_URL}/sites/by-site/${regionId}`)
        return data
    }

    async createSite(draft: SiteDraft): Promise<Site> {
        const { data } = await axios.post<Site>(`${import.meta.env.VITE_REST_SERVER_URL}/sites/`, draft)
        return data
    }
    async deleteSite(id:string):Promise<Site> {
        const {data} = await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/sites/delete/site/${id}`)
        return data
    }
}

const siteService = new SiteService()
export default siteService
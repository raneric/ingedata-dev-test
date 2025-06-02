import { getRoomStats } from "../services/adminService";

async function adminLoader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const query = {
    month: searchParams.get('month')
  };
  return await getRoomStats(query);
}

export {
  adminLoader
}
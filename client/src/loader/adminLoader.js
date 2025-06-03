import { getRoomStats } from "../services/adminService";


/**
 * Loader which fetch the rooms fulfillment rates
 *
 *
 * @param {Request} request - The current request object.
 * @returns {Promise<object>} A promise that resolves to the room stats.
 */
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
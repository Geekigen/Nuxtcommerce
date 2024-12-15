export default defineNuxtRouteMiddleware(async (to, from) => {
    const config = useRuntimeConfig();
  
    try {
      // Check if the user is authenticated by making an API call
      interface UserResponse {
        id: number;
        // add other properties if needed
      }

      const response = await $fetch<UserResponse>(`${config.public.apiBase}/api/user`, {
        credentials: 'include', // Send cookies for Sanctum
      });
  
      if (!response || !response.id) {
        // Redirect to login if no authenticated user is found
        return navigateTo('/login');
      }
    } catch (error) {
      console.error('Authentication check failed:', error);
  
      // Redirect to login on error
      return navigateTo('/login');
    }
  });
  
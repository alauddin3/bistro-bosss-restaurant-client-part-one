/**
 * Use TanStack Query v5 in this hook
 */
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Authentication/Provider/AuthProvider/AuthProvider';

const useCartData = () => {
    const { user } = useContext(AuthContext);

    /**
     * Data as cart object 
     */
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5020/carts?email=${user?.email}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },

    })

    return [cart, refetch];
};

export default useCartData;
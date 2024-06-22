import { useEffect, useState } from "react";

const useFoodMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5020/menu')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setMenu(data);
            }
        )
    }, [])
    return [menu, loading];
}

export default useFoodMenu;
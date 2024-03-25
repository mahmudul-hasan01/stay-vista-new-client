import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";

const Rooms = () => {

    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                } else {
                    setRooms(data)
                }
            })
    }, [category])

    return (
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {
                rooms.map(room => <Card key={room._id} room={room}></Card>)
            }
        </div>
    );
};

export default Rooms;
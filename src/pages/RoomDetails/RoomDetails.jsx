import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from 'react-helmet-async';

const RoomDetails = () => {
    const { id } = useParams()
    console.log(id);
    const [loading, setLoading] = useState(false)

    const [rooms, setRooms] = useState({})
    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRooms(singleRoom)
            })
        setLoading(false)
    }, [id])

    if (loading) return <Loader />

    return (
        <Container>
            <Helmet>
                <title>{rooms?.title}</title>
            </Helmet>
            <div className="">
                {/* Header */}
                <div className="flex flex-col gap-6"></div>
                {/* Room Info */}
                <div className=""></div>
                {/* Calender */}
                <div className=""></div>
            </div>
        </Container>
    );
};

export default RoomDetails;
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from 'react-helmet-async';
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RoomDetails = () => {
    const { id } = useParams()

    // const [loading, setLoading] = useState(false)

    // const [rooms, setRooms] = useState({})


    const {data: rooms = [], isLoading} = useQuery({
        queryKey: ['allRooms'],
        queryFn: async () => {
            const res =await axios.get(`http://localhost:5000/room/${id}`)
            return res.data
        }
    })


    
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('/rooms.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const singleRoom = data.find(room => room._id === id)
    //             setRooms(singleRoom)
    //         })
    //     setLoading(false)
    // }, [id])

    if (isLoading) return <Loader />

    return (
        <Container>
            <Helmet>
                <title>{rooms?.title}</title>
            </Helmet>
            {
                rooms &&
                <div className="max-w-screen-lg mx-auto">
                    {/* Header */}
                    <div className="flex flex-col gap-6">
                        <Header room={rooms}></Header>
                    </div>
                    {/* Room Info */}
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <RoomInfo room={rooms}></RoomInfo>
                        <div className='md:col-span-3 order-first md:order-last mb-10'>
                            {/* RoomReservation */}
                            <RoomReservation room={rooms} />
                        </div>
                    </div>
                </div>
            }
        </Container>
    );
};

export default RoomDetails;
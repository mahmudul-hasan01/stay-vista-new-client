import AddRoomForm from "../../../components/Form/AddRoomForm";
import { Helmet } from 'react-helmet-async'
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";

const AddRoom = () => {

    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value
        const guests = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0]
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        const image_url = await imageUpload(image)

        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guests,
            bathrooms,
            bedrooms,
            host,
            description,
            image: image_url?.data?.display_url,
        }
        console.table(roomData);

    }

    // Handle date change from react-date-range calender
    const handleDates = ranges => {
        console.log(ranges)
        setDates(ranges.selection)
    }
    // Handle Image button text
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <Helmet>
                <title>Add Room | Dashboard</title>
            </Helmet>
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} loading={loading} uploadButtonText={uploadButtonText} handleImageChange={handleImageChange}></AddRoomForm>
        </div>
    );
};

export default AddRoom;
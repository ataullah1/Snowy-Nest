import { FaLocationDot } from 'react-icons/fa6';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const OfficeMap = () => {
  // const position = [23.811056, 90.407608];
  return (
    <div className="mt-20">
      <div className="inline-block py-2 px-8 bg-[#24324A] rounded-tr-lg">
        <h1 className=" text-3xl font-bold text-white">
          <span className="flex items-center justify-center gap-2">
            <span className="text-redLi">
              <FaLocationDot />
            </span>
            Our Office
          </span>
        </h1>
      </div>
      {/* Iframe use */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930012046!2d90.25487162624671!3d23.781067240173687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1713162970227!5m2!1sen!2sbd"
        height="350"
        className="w-full h-60 md:h-96"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* Leaflet Use */}
      {/* <MapContainer
        // className="h-[500px]"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};

export default OfficeMap;

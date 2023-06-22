import React, {useEffect, useState} from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import contactImg from '../assets/images/services.jpg'
import {VscLocation} from "react-icons/vsc"
import {IoCallOutline} from "react-icons/io5"
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import { useMemo } from "react";


const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Contact');
	// const apiKey = fetchUsers()
	// const { data, status } = useQuery("gmaps", fetchUsers);
	// console.log(apiKey.then((res) => res.json()));
	// const [mapTitle, setMapTitle] = useState("")
	// const [showMap, setShowMap] = useState(false)

	// useEffect(() => {
	//   async function fetchgm() {
	// 	const API = `/.netlify/functions/gmaps`;
	// 	try {
	// 	  const todo = await fetch(API).then((res) => res.json());
	// 	  const ins = todo.title
	// 	  setMapTitle(ins);

	// 	} catch (err) {
	// 	  console.log(err);
	// 	} 
	//   }
	//   fetchgm();
	// }, []);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setShowMap(true)
	// 	}, 500)

	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, [])

	const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAK,
  });

	// console.log(isLoaded);
	const center = useMemo(() => ({ lat: 37.786483, lng: -122.415858}), []);

	const map_styles = [
		{
		elementType: "geometry",
		stylers: [
			{
			color: "#242f3e",
			},
		],
		},
		{
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#746855",
			},
		],
		},
		{
		elementType: "labels.text.stroke",
		stylers: [
			{
			color: "#242f3e",
			},
		],
		},
		{
		featureType: "administrative.locality",
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#d59563",
			},
		],
		},
		{
		featureType: "poi",
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#d59563",
			},
		],
		},
		{
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [
			{
			color: "#263c3f",
			},
		],
		},
		{
		featureType: "poi.park",
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#6b9a76",
			},
		],
		},
		{
		featureType: "road",
		elementType: "geometry",
		stylers: [
			{
			color: "#38414e",
			},
		],
		},
		{
		featureType: "road",
		elementType: "geometry.stroke",
		stylers: [
			{
			color: "#212a37",
			},
		],
		},
		{
		featureType: "road",
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#9ca5b3",
			},
		],
		},
		{
		featureType: "road.highway",
		elementType: "geometry",
		stylers: [
			{
			color: "#746855",
			},
		],
		},
		{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [
			{
			color: "#1f2835",
			},
		],
		},
		{
		featureType: "road.highway",
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#f3d19c",
			},
		],
		},
		{
		featureType: "transit",
		elementType: "geometry",
		stylers: [
			{
			color: "#2f3948",
			},
		],
		},
		{
		featureType: "transit.station",
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#d59563",
			},
		],
		},
		{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
			color: "#17263c",
			},
		],
		},
		{
		featureType: "water",
		elementType: "labels.text.fill",
		stylers: [
			{
			color: "#515c6d",
			},
		],
		},
		{
		featureType: "water",
		elementType: "labels.text.stroke",
		stylers: [
			{
			color: "#17263c",
			},
		],
		},
	];

	return (
    <section ref={contactRef} id="contactContainer">
      <div
        className="contact100-more flex-col-c-m"
        style={{
          backgroundImage: `url(${contactImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-w size1 p-b-47">
          <div className="txt1 p-r-25">
            <span className="lnr lnr-map-marker">
              <VscLocation style={{ color: "#fff", fontSize: "24px" }} />
            </span>
          </div>
          <div className="flex-col size2">
            <span className="txt1 p-b-20">Address</span>
            <a
              href="https://goo.gl/maps/kSCfoW1TpQjY5ArF6"
              target="_blank"
              className="txt2"
            >
              764 Geary St, San Francisco, CA 94109
            </a>
          </div>
        </div>
        <div className="dis-flex size1 p-b-47">
          <div className="txt1 p-r-25">
            <span className="lnr lnr-phone-handset">
              <IoCallOutline style={{ color: "#fff", fontSize: "24px" }} />
            </span>
          </div>
          <div className="flex-col size2">
            <span className="txt1 p-b-20">Call Us</span>
            <a href="tel:+14158749626" className="txt3">
              415-874-9626
            </a>
          </div>
        </div>
      </div>
      <div className="gmaps">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
            // mapContainerStyle={{width: '100%', height: '100%'}}
            center={center}
            zoom={15}
            options={{
              styles: map_styles,
              mapTypeControl: false,
              streetViewControl: false,
              zoomControlOptions: {
                color: "red",
              },
            }}

            // mapTypeId="463a9d2c2785dc63"
          >
            <Marker position={{ lat: 37.786483, lng: -122.415858 }} />
          </GoogleMap>
		)}
      </div>
    </section>
  );
};

export default Contact;

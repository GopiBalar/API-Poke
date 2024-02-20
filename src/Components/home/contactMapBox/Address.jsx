import React from "react";
import AddressItem from "./AddressItem";
import styles from "../../../styles/home/contactMap.module.css";

function Address() {
  return (
    <div style={{ backgroundColor: "paleturquoise" }}>
      <div className={styles.addressContainer}>
        <AddressItem
          icon="fa-solid fa-location-dot"
          title="Location"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <AddressItem
          icon="fa-solid fa-envelope"
          title="Email"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <AddressItem
          icon="fa-solid fa-phone"
          title="Call"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <div className={styles.mapContainer}>
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;q=yogi%20chowk%20surat+(Lope%20multimedia%20institute)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://www.easybooking.eu/produkte/julia-hotelsoftware">
          Hotelprogramm Buchungssystem
        </a>
      </div>
    </div>
  );
}

export default Address;

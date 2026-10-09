import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WeddingConfig } from "../types/wedding";
import { Plane, Car, MapPin, Anchor, SunDim, Sparkles } from "lucide-react";
import { OrnamentDivider } from "./OrnamentDivider";
export interface PalaceConciergeProps {
  weddingData: WeddingConfig;
}
export const PalaceConcierge: React.FC<PalaceConciergeProps> = ({
  weddingData,
}) => {
  const [activeTab, setActiveTab] = useState<
    "venue" | "transit" | "stay" | "weather"
  >("venue");
  return (
    <section
      id="venue"
      className="relative w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-6xl mx-auto flex flex-col items-center px-4 pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden bg-[#FAFAFA]/35 backdrop-blur-[12px] rounded-[2rem] border border-white/40 shadow-2xl"
    >
      {" "}
      {/* Procedural Botanicals */}{" "}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {" "}
        {/* Header */}{" "}
        <div className="text-center mb-10 w-full flex flex-col items-center">
          {" "}
          <span className="text-xs sm:text-sm font-bold font-sans tracking-[0.4em] text-[#6B4C0A] uppercase font-semibold mb-6">
            {" "}
            Destination & Travel Guide{" "}
          </span>{" "}
          <OrnamentDivider width={200} className="mb-8" />{" "}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#1A1615] font-normal tracking-tight">
            {" "}
            Palace Concierge{" "}
          </h2>{" "}
        </div>{" "}
        {/* Minimalist Tab Controls */}{" "}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-16 px-4">
          {" "}
          {[
            { id: "venue", label: "The Palaces" },
            { id: "transit", label: "Boat Transfers" },
            { id: "stay", label: "Flights" },
            { id: "weather", label: "Details" },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`relative pb-2 font-serif tracking-widest uppercase transition-colors duration-300 text-xs sm:text-sm ${isSelected ? "text-[#801B31] font-semibold" : "text-[#1A1615]/50 hover:text-[#1A1615]"}`}
              >
                {" "}
                {tab.label}{" "}
                {isSelected && (
                  <motion.div
                    layoutId="concierge-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#801B31]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}{" "}
              </button>
            );
          })}{" "}
        </div>{" "}
        {/* Tab Content (Open & Frameless) */}{" "}
        <div className="w-full max-w-4xl min-h-[400px] relative">
          {" "}
          <AnimatePresence mode="wait">
            {" "}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center w-full"
            >
              {" "}
              {activeTab === "venue" && (
                <>
                  {" "}
                  <h3 className="font-serif text-5xl sm:text-6xl text-[#1A1615] font-medium tracking-tight mb-8">
                    {" "}
                    The Oberoi Udaivilas{" "}
                  </h3>{" "}
                  <p className="font-serif text-sm sm:text-base md:text-lg text-[#1A1615]/80 leading-[2.2] max-w-2xl font-medium mb-8">
                    {" "}
                    Set against the majestic Aravalli Hills and looking across
                    the shimmering waters of Lake Pichola, our wedding takes
                    place within the historic grand palaces of Udaipur.{" "}
                  </p>{" "}
                  <a
                    href="https://goo.gl/maps/udaivilas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#6B4C0A] font-sans text-xs tracking-widest uppercase hover:text-[#5A1222] transition-colors"
                  >
                    {" "}
                    <MapPin className="w-4 h-4" />{" "}
                    <span>View Map & Directions</span>{" "}
                  </a>{" "}
                </>
              )}{" "}
              {activeTab === "transit" && (
                <>
                  {" "}
                  <h3 className="font-serif text-5xl sm:text-6xl text-[#1A1615] font-medium tracking-tight mb-8">
                    {" "}
                    Private Boat Arrivals{" "}
                  </h3>{" "}
                  <p className="font-serif text-sm sm:text-base md:text-lg text-[#1A1615]/80 leading-[2.2] max-w-2xl font-medium">
                    {" "}
                    All guests will be escorted from the Badi Mahal jetty via
                    private wooden boats. Allow the gentle waters of Lake
                    Pichola to transport you directly to the ceremonial
                    docks.{" "}
                  </p>{" "}
                  <OrnamentDivider width={140} className="my-10" />{" "}
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1615]/60 font-semibold">
                    {" "}
                    Boats depart every 15 minutes starting at 4:00 PM.{" "}
                  </span>{" "}
                </>
              )}{" "}
              {activeTab === "stay" && (
                <>
                  {" "}
                  <h3 className="font-serif text-5xl sm:text-6xl text-[#1A1615] font-medium tracking-tight mb-8">
                    {" "}
                    Travel Logistics{" "}
                  </h3>{" "}
                  <p className="font-serif text-sm sm:text-base md:text-lg text-[#1A1615]/80 leading-[2.2] max-w-2xl font-medium">
                    {" "}
                    For those flying in, Maharana Pratap Airport (UDR) is
                    located 45 minutes from the palace. Our concierge team has
                    arranged a fleet of private vintage vehicles for your
                    airport transfer.{" "}
                  </p>{" "}
                </>
              )}{" "}
              {activeTab === "weather" && (
                <>
                  {" "}
                  <h3 className="font-serif text-5xl sm:text-6xl text-[#1A1615] font-medium tracking-tight mb-8">
                    {" "}
                    Climate & Attire{" "}
                  </h3>{" "}
                  <p className="font-serif text-sm sm:text-base md:text-lg text-[#1A1615]/80 leading-[2.2] max-w-2xl font-medium">
                    {" "}
                    November in Udaipur is beautifully temperate. Expect sunny
                    skies and crisp breezes across the lake, with evening
                    temperatures cooling down considerably. Light pashminas or
                    shawls are recommended for the evening ceremonies.{" "}
                  </p>{" "}
                </>
              )}{" "}
            </motion.div>{" "}
          </AnimatePresence>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

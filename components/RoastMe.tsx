/// <reference types="react" />

"use client";

import { useState } from 'react';
import Image from 'next/image';

const RoastMe = () => {
  const [image, setImage] = useState<string | null>(null);
  const [roast, setRoast] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRoast = async () => {
    // Here you would call your AI service to generate the roast and score
    // For now, we'll use placeholder data
    setRoast("Your outfit screams 'I just rolled out of bed and into a thrift store clearance bin.'");
    setScore(6);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Get Roasted</h2>
      <div className="flex flex-col items-center gap-8">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        {image && (
          <Image
            src={image}
            alt="Uploaded outfit"
            width={300}
            height={300}
            className="rounded-lg"
          />
        )}
        <button
          onClick={handleRoast}
          className="btn btn-primary"
          disabled={!image}
        >
          Roast Me!
        </button>
        {roast && (
          <div className="bg-base-200 p-4 rounded-lg max-w-2xl">
            <p className="text-lg mb-4">{roast}</p>
            <p className="text-2xl font-bold">Aura Score: {score}/10</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoastMe;
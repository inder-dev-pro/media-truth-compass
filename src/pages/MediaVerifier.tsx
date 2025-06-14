
import React from "react";
import Header from "@/components/Header";

const MediaVerifier = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="max-w-2xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold mb-4 text-primary">🕵️‍♂️ Media Verifier</h2>
      <p className="mb-7 text-md text-muted-foreground">
        Upload an image or video to run AI-driven forgery, deepfake, and provenance checks. 
        <br/>
        <span className="text-sm text-foreground font-semibold">Coming soon: Upload and analysis UI for images/videos!</span>
      </p>
      <div className="border border-dashed border-muted rounded-xl p-7 text-muted-foreground text-center">
        <span className="text-sm">[Tool interface coming soon]</span>
      </div>
    </main>
  </div>
);

export default MediaVerifier;

"use client";

import { useState } from "react";

/**
 * Admin Upload Page for Current Affairs
 * Allows uploading/updating PDF links for specific dates.
 */
export default function AdminUploadPage() {
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/current-affairs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, link }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Successfully updated current affair!");
        // Optional: clear form
        // setDate("");
        // setLink("");
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to update.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("error");
      setMessage("An error occurred while uploading.");
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-md mx-auto bg-background border border-foreground/10 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-foreground text-center">
          Admin: Upload Current Affair
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-foreground/20 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              PDF Link (Google Drive / Direct URL)
            </label>
            <input
              type="url"
              required
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://drive.google.com/..."
              className="w-full px-4 py-2 border border-foreground/20 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-3 px-4 rounded-md font-semibold text-background transition-colors ${
              status === "loading"
                ? "bg-primary/70 cursor-not-allowed"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {status === "loading" ? "Updating..." : "Update / Upload"}
          </button>
        </form>

        {message && (
          <div
            className={`mt-6 p-4 rounded-md text-sm text-center ${
              status === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

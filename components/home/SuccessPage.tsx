"use client";

import { Button } from "@/components/ui/button";

function CelebrationFireworks() {
  return (
    <div className="relative w-80 h-80 mx-auto mb-8">
      <svg
        viewBox="0 0 320 320"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main firework burst */}
        <g transform="translate(160,160)">
          {/* Long rays */}
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-80"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="56"
            y2="-56"
            stroke="#eab308"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="80"
            y2="0"
            stroke="#06b6d4"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="56"
            y2="56"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="80"
            stroke="#eab308"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-56"
            y2="56"
            stroke="#06b6d4"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-80"
            y2="0"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-56"
            y2="-56"
            stroke="#eab308"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Medium rays */}
          <line
            x1="0"
            y1="0"
            x2="28"
            y2="-70"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="70"
            y2="-28"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="70"
            y2="28"
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="28"
            y2="70"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-28"
            y2="70"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-70"
            y2="28"
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-70"
            y2="-28"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-28"
            y2="-70"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Short rays */}
          <line
            x1="0"
            y1="0"
            x2="15"
            y2="-45"
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="45"
            y2="-15"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="45"
            y2="15"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="15"
            y2="45"
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-15"
            y2="45"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-45"
            y2="15"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-45"
            y2="-15"
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-15"
            y2="-45"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Sparkles and stars */}
        <g fill="#eab308">
          <circle cx="80" cy="60" r="3" />
          <circle cx="240" cy="80" r="2" />
          <circle cx="60" cy="200" r="2" />
          <circle cx="260" cy="220" r="3" />
        </g>

        <g fill="#06b6d4">
          <circle cx="100" cy="100" r="2" />
          <circle cx="220" cy="120" r="2" />
          <circle cx="90" cy="240" r="3" />
          <circle cx="230" cy="260" r="2" />
        </g>

        <g fill="#22c55e">
          <circle cx="50" cy="120" r="2" />
          <circle cx="270" cy="140" r="3" />
          <circle cx="40" cy="180" r="2" />
          <circle cx="280" cy="200" r="2" />
        </g>

        {/* Star shapes */}
        <g fill="#eab308">
          <path d="M120 40 L122 46 L128 46 L123 50 L125 56 L120 52 L115 56 L117 50 L112 46 L118 46 Z" />
          <path d="M200 280 L202 286 L208 286 L203 290 L205 296 L200 292 L195 296 L197 290 L192 286 L198 286 Z" />
        </g>

        <g fill="#06b6d4">
          <path d="M280 100 L282 106 L288 106 L283 110 L285 116 L280 112 L275 116 L277 110 L272 106 L278 106 Z" />
          <path d="M40 260 L42 266 L48 266 L43 270 L45 276 L40 272 L35 276 L37 270 L32 266 L38 266 Z" />
        </g>
      </svg>
    </div>
  );
}

export default function SuccessPage() {
  // This can be made dynamic based on the success type
  const successType = "account"; // or "account"

  const content = {
    password: {
      title: "Password Changed Successfully!",
      description:
        "Your account is set up! Just verify your email to get started.",
      buttonText: "Go To Login",
    },
    account: {
      title: "Account Created Successfully!",
      description:
        "Your account is set up! Just verify your email to get started.",
      buttonText: "Go To Login",
    },
  };

  const currentContent = content[successType as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-green-600 rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ScapeSync</h1>
            <p className="text-xs text-gray-600 uppercase tracking-wide">
              Landscaping Management Software
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <CelebrationFireworks />

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentContent.title}
            </h2>
            <p className="text-gray-600">{currentContent.description}</p>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium">
            {currentContent.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

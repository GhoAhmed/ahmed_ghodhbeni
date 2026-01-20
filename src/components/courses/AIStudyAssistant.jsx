import { useState } from "react";
import {
  FaRobot,
  FaUpload,
  FaComments,
  FaBook,
  FaSpinner,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const AIStudyAssistant = ({ course, currentChapter }) => {
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // GROQ API - FREE & SUPER FAST
  // Get free API key at: https://console.groq.com
  const GROQ_API_KEY = import.meta.env.VITE_API_KEY; // Fixed: Added VITE_ prefix

  // Handle file upload
  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
      file: file,
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  // Send message to AI using Groq
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Prepare context from course
      const context = `
Course: ${course.title}
Current Chapter: ${currentChapter.title}
Chapter Content: ${JSON.stringify(currentChapter.content).substring(0, 1000)}
      `;

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful study assistant. Provide clear, educational answers to help students learn.",
              },
              {
                role: "user",
                content: `Based on this course context:\n${context}\n\nStudent question: ${inputMessage}`,
              },
            ],
            temperature: 0.7,
            max_tokens: 800,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = {
        role: "assistant",
        content: data.choices[0].message.content,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "assistant",
        content:
          "Sorry, I encountered an error. Please check your API key and try again.",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate study guide
  const generateStudyGuide = async () => {
    setIsLoading(true);
    setActiveTab("chat");

    try {
      const context = `
Course: ${course.title}
Chapter: ${currentChapter.title}
Content: ${JSON.stringify(currentChapter.content).substring(0, 1500)}
      `;

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "user",
                content: `Create a comprehensive study guide for this chapter:\n${context}\n\nInclude:\n1. Key Concepts (3-5 main ideas)\n2. Important Terms (with definitions)\n3. Summary (2-3 paragraphs)\n4. Practice Questions (5 questions)\n\nFormat it clearly with sections.`,
              },
            ],
            temperature: 0.5,
            max_tokens: 1500,
          }),
        },
      );

      const data = await response.json();
      const studyGuide = {
        role: "assistant",
        content: data.choices[0].message.content,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([studyGuide]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "assistant",
        content: "Error generating study guide. Please check your API key.",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <FaRobot className="text-xl sm:text-2xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold">AI Study Assistant</h3>
            <p className="text-xs sm:text-sm text-purple-100">
              How can I help! ⚡
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "chat"
              ? "bg-white text-purple-600 border-b-2 border-purple-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaComments />
            <span className="hidden sm:inline">Chat</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("upload")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "upload"
              ? "bg-white text-purple-600 border-b-2 border-purple-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaUpload />
            <span className="hidden sm:inline">Upload</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "tools"
              ? "bg-white text-purple-600 border-b-2 border-purple-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <HiSparkles />
            <span className="hidden sm:inline">Tools</span>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Chat Tab */}
        {activeTab === "chat" && (
          <div className="space-y-4">
            {/* Messages */}
            <div className="h-96 overflow-y-auto space-y-3 mb-4 bg-gray-50 rounded-xl p-4">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <FaRobot className="text-5xl text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">
                      Ask me anything about {currentChapter.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      ⚡ Lightning-fast responses with Groq
                    </p>
                  </div>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        msg.role === "user"
                          ? "bg-purple-600 text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      }`}
                    >
                      {/* Fixed: Removed duplicate <p> tag */}
                      <p
                        className={`text-sm whitespace-pre-wrap ${
                          msg.role === "user" ? "text-white" : "text-black"
                        }`}
                      >
                        {msg.content}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.role === "user"
                            ? "text-purple-200"
                            : "text-gray-400"
                        }`}
                      >
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                    <FaSpinner className="animate-spin text-purple-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask a question about this chapter..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === "upload" && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
              <input
                type="file"
                multiple
                accept=".pdf,.txt,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <FaUpload className="text-4xl text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">
                  Upload additional study materials
                </p>
                <p className="text-xs text-gray-400">PDF, TXT, or DOCX files</p>
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700">
                  Uploaded Files ({uploadedFiles.length})
                </h4>
                {uploadedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FaBook className="text-purple-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setUploadedFiles(
                          uploadedFiles.filter((_, i) => i !== idx),
                        )
                      }
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tools Tab */}
        {activeTab === "tools" && (
          <div className="space-y-3">
            <button
              onClick={generateStudyGuide}
              disabled={isLoading}
              className="w-full p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaBook className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Generate Study Guide
                  </h4>
                  <p className="text-sm text-gray-600">
                    Create a comprehensive guide for this chapter
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                setActiveTab("chat");
                setInputMessage(
                  "Create 5 practice questions with answers for this chapter",
                );
                setTimeout(() => handleSendMessage(), 100);
              }}
              disabled={isLoading}
              className="w-full p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiSparkles className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Practice Questions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get AI-generated questions to test your knowledge
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                setActiveTab("chat");
                setInputMessage(
                  "Explain the key concepts in simple terms with examples",
                );
                setTimeout(() => handleSendMessage(), 100);
              }}
              disabled={isLoading}
              className="w-full p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaComments className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Simplify Concepts
                  </h4>
                  <p className="text-sm text-gray-600">
                    Break down complex topics into simple explanations
                  </p>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIStudyAssistant;

import React from 'react'

const StarsBackground = () => {
    const stars = Array.from({ length: 30 });
    return (
        <div className="inset-0 overflow-hidden -z-10">
            {stars.map((_, i) => (
                <div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${
                        i % 2 === 0 ? 'bg-blue-800' : i % 3 === 0 ? 'bg-violet-700' : 'bg-[#EC7FFF]'
                    }`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.6 + 0.2,
                        animation: 'pulse 2s infinite ease-in-out',
                        animationDelay: `${i * 0.1}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default StarsBackground
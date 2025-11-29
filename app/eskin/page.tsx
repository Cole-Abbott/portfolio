import Header from '../components/Header';
import { GitBranch, Cpu, Zap, Database, Code, ArrowRight, Activity } from 'lucide-react';

export const metadata = {
  title: 'E-Skin Research — Cole Abbott',
  description: 'Firmware development for electronic skin tactile sensing system',
};

export default function ESkinPage() {
  return (
    <div className="min-h-screen bg-base-bg text-content-dark">
      <Header />

      <main className="max-w-4xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-heading mb-4">E-Skin Firmware</h1>
          <p className="text-lg text-content-dark mb-6">
            High-performance firmware for electronic skin tactile sensing on PIC32 MZ EF microcontroller
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['PIC32 MZ EF', 'C', 'MPLAB Harmony', 'USB', 'ADC', 'DMA', 'Python'].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-sm font-medium bg-content-dark text-content-light rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/Cole-Abbott/e_skin_firmware_final"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-sm font-semibold text-base-bg bg-accent rounded-lg hover:bg-accent-hover transition"
          >
            <GitBranch className="w-4 h-4 mr-2" />
            View on GitHub
          </a>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-heading mb-4 flex items-center">
            <Activity className="w-6 h-6 mr-2" />
            Project Overview
          </h2>
          <div className="bg-content-light/10 border border-border rounded-lg p-6">
            <p className="text-content-dark leading-relaxed mb-4">
              This project involves firmware development for an electronic skin (E-Skin) sensor system
              designed for robotic tactile sensing applications. The firmware runs on a PIC32 MZ EF
              microcontroller and handles high-speed analog-to-digital conversion for a 64-electrode
              sensor array with real-time USB data transmission.
            </p>
            <p className="text-content-dark leading-relaxed">
              The system is built using MPLAB Harmony framework for hardware abstraction, providing
              portable and maintainable code for peripheral configuration and management.
            </p>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-heading mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-2" />
            System Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-content-light/10 border border-border rounded-lg p-5">
              <h3 className="text-lg font-semibold text-pop mb-3">Hardware Platform</h3>
              <ul className="space-y-2 text-content-dark">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>PIC32 MZ EF microcontroller (200 MHz)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>12-bit SAR ADC with up to 18 Msps</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>Built-in USB 2.0 Full Speed module</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>DMA controller for efficient data transfer</span>
                </li>
              </ul>
            </div>
            <div className="bg-content-light/10 border border-border rounded-lg p-5">
              <h3 className="text-lg font-semibold text-pop mb-3">Software Stack</h3>
              <ul className="space-y-2 text-content-dark">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>MPLAB Harmony v3 framework</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>Custom ADC driver with interrupt handling</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>USB CDC class implementation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                  <span>Python host application with pyusb</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADC Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-heading mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            ADC Configuration
          </h2>
          <div className="bg-content-light/10 border border-border rounded-lg p-6 mb-6">
            <p className="text-content-dark leading-relaxed mb-4">
              The ADC subsystem is configured for high-speed sequential sampling of all 64 sensor
              electrodes. Key features include:
            </p>
            <ul className="space-y-2 text-content-dark mb-4">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                <span><strong>Resolution:</strong> 12-bit samples for precise tactile readings</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                <span><strong>Trigger:</strong> Timer-based automatic triggering for consistent sample rates</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                <span><strong>Transfer:</strong> DMA-based data movement to minimize CPU overhead</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 mr-2 mt-1 text-accent" />
                <span><strong>Buffering:</strong> Double-buffered acquisition for continuous streaming</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
              <code>{`// ADC Initialization Example
void ADC_Initialize(void) {
    // Configure ADC for 12-bit resolution
    ADCCON1bits.TRGSRC = 0b00001;  // Timer trigger
    ADCCON2bits.SAMC = 5;          // Sample time
    ADCCON3bits.DIGEN = 1;         // Enable digital output
    
    // Configure for sequential scanning of all channels
    for (int i = 0; i < NUM_CHANNELS; i++) {
        ADC_ChannelEnable(i);
    }
    
    // Enable interrupt on conversion complete
    IEC1bits.ADCIE = 1;
    IPC11bits.ADCIP = 5;  // Priority 5
}`}</code>
            </pre>
          </div>
        </section>

        {/* USB Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-heading mb-4 flex items-center">
            <Database className="w-6 h-6 mr-2" />
            USB Communication
          </h2>
          <div className="bg-content-light/10 border border-border rounded-lg p-6 mb-6">
            <p className="text-content-dark leading-relaxed mb-4">
              Data is transmitted to the host computer via USB bulk transfers. The implementation uses
              the built-in USB module configured as a vendor-specific device for maximum throughput.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent">64</div>
                <div className="text-sm text-content-dark">Channels</div>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent">12-bit</div>
                <div className="text-sm text-content-dark">Resolution</div>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent">USB 2.0</div>
                <div className="text-sm text-content-dark">Full Speed</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
              <code>{`// USB Data Transmission
void USB_SendData(uint16_t* buffer, uint32_t size) {
    if (USB_DeviceStateGet() == USB_DEVICE_STATE_CONFIGURED) {
        // Pack 12-bit samples for efficient transfer
        USB_DeviceEndpointWrite(
            EP_BULK_IN,
            buffer,
            size * sizeof(uint16_t),
            USB_TRANSFER_ASYNC
        );
    }
}`}</code>
            </pre>
          </div>
        </section>

        {/* Python Interface Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-heading mb-4 flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Python Data Acquisition
          </h2>
          <div className="bg-content-light/10 border border-border rounded-lg p-6 mb-6">
            <p className="text-content-dark leading-relaxed">
              A Python application using the <code className="px-1 py-0.5 bg-gray-200 rounded text-sm">pyusb</code> library
              provides the host-side interface for data acquisition. This enables real-time visualization,
              logging, and integration with machine learning pipelines for tactile pattern recognition.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
              <code>{`import usb.core
import usb.util
import numpy as np

# Find the E-Skin device
dev = usb.core.find(idVendor=0x04D8, idProduct=0x0053)
dev.set_configuration()

# Read sensor data
def read_frame():
    data = dev.read(0x81, 128, timeout=1000)
    return np.frombuffer(data, dtype=np.uint16)

# Continuous acquisition loop
while True:
    frame = read_frame()
    process_tactile_data(frame.reshape(8, 8))`}</code>
            </pre>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t border-border">
          <a
            href="/projects"
            className="inline-flex items-center text-accent hover:text-accent-hover transition font-semibold"
          >
            ← Back to All Projects
          </a>
        </div>
      </main>
    </div>
  );
}

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Users, Package, Plane, Phone, Mail, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function BookingForm() {
  const [passengerDate, setPassengerDate] = useState<Date>();
  const [cargoDate, setCargoDate] = useState<Date>();
  const [passengerDeparture, setPassengerDeparture] = useState('');
  const [passengerDestination, setPassengerDestination] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [cargoDeparture, setCargoDeparture] = useState('');
  const [cargoDestination, setCargoDestination] = useState('');
  const [cargoType, setCargoType] = useState('');

  const handlePassengerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!passengerDate) {
      toast.error('Please select a travel date');
      return;
    }
    if (!passengerDeparture) {
      toast.error('Please select a departure location');
      return;
    }
    if (!passengerDestination) {
      toast.error('Please select a destination');
      return;
    }
    if (!passengerCount) {
      toast.error('Please select number of passengers');
      return;
    }

    toast.success('Booking Request Submitted', {
      description: "We'll contact you within 24 hours to confirm your passenger charter booking.",
    });
    
    // Reset form
    e.currentTarget.reset();
    setPassengerDate(undefined);
    setPassengerDeparture('');
    setPassengerDestination('');
    setPassengerCount('');
  };

  const handleCargoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!cargoDate) {
      toast.error('Please select a preferred date');
      return;
    }
    if (!cargoDeparture) {
      toast.error('Please select an origin location');
      return;
    }
    if (!cargoDestination) {
      toast.error('Please select a destination');
      return;
    }
    if (!cargoType) {
      toast.error('Please select cargo type');
      return;
    }

    toast.success('Cargo Request Submitted', {
      description: "We'll contact you within 24 hours to confirm your cargo transport booking.",
    });
    
    // Reset form
    e.currentTarget.reset();
    setCargoDate(undefined);
    setCargoDeparture('');
    setCargoDestination('');
    setCargoType('');
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Flight</h2>
          <p className="text-xl text-gray-600">
            Choose between passenger charter or cargo services and let us handle the rest.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Forms */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="passenger" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="passenger" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Passenger Charter</span>
                </TabsTrigger>
                <TabsTrigger value="cargo" className="flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>Cargo Services</span>
                </TabsTrigger>
              </TabsList>

              {/* Passenger Booking */}
              <TabsContent value="passenger">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plane className="h-5 w-5 text-blue-600" />
                      <span>Passenger Charter Booking</span>
                    </CardTitle>
                    <CardDescription>
                      Book your comfortable and safe passenger transport
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePassengerSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="passenger-name">Full Name *</Label>
                          <Input id="passenger-name" required />
                        </div>
                        <div>
                          <Label htmlFor="passenger-phone">Phone Number *</Label>
                          <Input id="passenger-phone" type="tel" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="passenger-email">Email Address *</Label>
                        <Input id="passenger-email" type="email" required />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="departure">Departure Location *</Label>
                          <Select value={passengerDeparture} onValueChange={setPassengerDeparture} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select departure city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="juba">Juba</SelectItem>
                              <SelectItem value="wau">Wau</SelectItem>
                              <SelectItem value="malakal">Malakal</SelectItem>
                              <SelectItem value="bentiu">Bentiu</SelectItem>
                              <SelectItem value="aweil">Aweil</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="destination">Destination *</Label>
                          <Select value={passengerDestination} onValueChange={setPassengerDestination} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select destination" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="juba">Juba</SelectItem>
                              <SelectItem value="wau">Wau</SelectItem>
                              <SelectItem value="malakal">Malakal</SelectItem>
                              <SelectItem value="bentiu">Bentiu</SelectItem>
                              <SelectItem value="aweil">Aweil</SelectItem>
                              <SelectItem value="kampala">Kampala, Uganda</SelectItem>
                              <SelectItem value="nairobi">Nairobi, Kenya</SelectItem>
                              <SelectItem value="khartoum">Khartoum, Sudan</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Travel Date *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                type="button"
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !passengerDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {passengerDate ? format(passengerDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={passengerDate}
                                onSelect={setPassengerDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <Label htmlFor="passengers">Number of Passengers *</Label>
                          <Select value={passengerCount} onValueChange={setPassengerCount} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4 Passengers</SelectItem>
                              <SelectItem value="5">5 Passengers</SelectItem>
                              <SelectItem value="6+">6+ Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="passenger-notes">Additional Notes</Label>
                        <Textarea 
                          id="passenger-notes" 
                          placeholder="Any special requirements or additional information..."
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Submit Passenger Booking Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Cargo Booking */}
              <TabsContent value="cargo">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5 text-orange-500" />
                      <span>Cargo Services Booking</span>
                    </CardTitle>
                    <CardDescription>
                      Reliable cargo transport for your business needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCargoSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cargo-company">Company/Organization *</Label>
                          <Input id="cargo-company" required />
                        </div>
                        <div>
                          <Label htmlFor="cargo-contact">Contact Person *</Label>
                          <Input id="cargo-contact" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cargo-phone">Phone Number *</Label>
                          <Input id="cargo-phone" type="tel" required />
                        </div>
                        <div>
                          <Label htmlFor="cargo-email">Email Address *</Label>
                          <Input id="cargo-email" type="email" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cargo-origin">Origin Location *</Label>
                          <Select value={cargoDeparture} onValueChange={setCargoDeparture} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select origin" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="juba">Juba</SelectItem>
                              <SelectItem value="wau">Wau</SelectItem>
                              <SelectItem value="malakal">Malakal</SelectItem>
                              <SelectItem value="bentiu">Bentiu</SelectItem>
                              <SelectItem value="aweil">Aweil</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="cargo-destination">Destination *</Label>
                          <Select value={cargoDestination} onValueChange={setCargoDestination} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select destination" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="juba">Juba</SelectItem>
                              <SelectItem value="wau">Wau</SelectItem>
                              <SelectItem value="malakal">Malakal</SelectItem>
                              <SelectItem value="bentiu">Bentiu</SelectItem>
                              <SelectItem value="aweil">Aweil</SelectItem>
                              <SelectItem value="kampala">Kampala, Uganda</SelectItem>
                              <SelectItem value="nairobi">Nairobi, Kenya</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Preferred Date *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                type="button"
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !cargoDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {cargoDate ? format(cargoDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={cargoDate}
                                onSelect={setCargoDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <Label htmlFor="cargo-weight">Estimated Weight (kg) *</Label>
                          <Input id="cargo-weight" type="number" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="cargo-type">Cargo Type *</Label>
                        <Select value={cargoType} onValueChange={setCargoType} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cargo type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Cargo</SelectItem>
                            <SelectItem value="medical">Medical Supplies</SelectItem>
                            <SelectItem value="food">Food Items</SelectItem>
                            <SelectItem value="equipment">Equipment</SelectItem>
                            <SelectItem value="documents">Documents</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="cargo-description">Cargo Description *</Label>
                        <Textarea 
                          id="cargo-description" 
                          placeholder="Detailed description of cargo items, dimensions, special handling requirements..."
                          className="min-h-[100px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Submit Cargo Booking Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">+211 910 004 005</p>
                    <p className="text-sm text-gray-600">+211 929 667 788</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">airtrackaviation@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-600">Juba, South Sudan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="bg-[#00000000] mt-[0px] mr-[0px] mb-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-normal opacity-100 text-[#020817]" >8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="bg-[#00000000] mt-[0px] mr-[0px] mb-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-normal opacity-100 text-[#020817]" >8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>24/7 Emergency Services Available</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


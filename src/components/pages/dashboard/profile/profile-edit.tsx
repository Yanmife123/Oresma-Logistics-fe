// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export function ProfileEdit() {
//   <TabsContent value="settings" className="space-y-6">
//     <Card>
//       <CardHeader>
//         <CardTitle>Edit Profile</CardTitle>
//         <CardDescription>Update your personal information</CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="firstName">First Name</Label>
//             <Input
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="lastName">Last Name</Label>
//             <Input
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="email">Email Address</Label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone Number</Label>
//           <Input
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="position">Position</Label>
//             <Input
//               id="position"
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="location">Location</Label>
//             <Input
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="bio">Bio</Label>
//           <Textarea
//             id="bio"
//             name="bio"
//             value={formData.bio}
//             onChange={handleChange}
//             rows={4}
//           />
//         </div>

//         <div className="flex gap-3 pt-4">
//           <Button
//             onClick={handleSave}
//             className="bg-orange-600 hover:bg-orange-700"
//           >
//             Save Changes
//           </Button>
//           <Button onClick={() => setIsEditing(false)} variant="outline">
//             Cancel
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   </TabsContent>;
// }

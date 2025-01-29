import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../constants/environment'; // Import environment config
import { io, Socket } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = environment.local.apiUrl; // Use the backend API URL from environment
  private socketUrl = environment.local.socketUrl; // Add the Socket.IO server URL
  private socket!: Socket;
   // BehaviorSubject for real-time updates
   private messagesSubject = new BehaviorSubject<any[]>([]);
   public socketListener = new BehaviorSubject<any>([]);
   public messages$ = this.messagesSubject.asObservable();

  constructor(private http: HttpClient) {}

   // Initialize WebSocket connection
   initializeSocketConnection(userToken: string): void {
    this.socket = io(`${this.socketUrl}?token=${userToken}`);

    // Handle connection success
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    // Handle incoming messages
    this.socket.on('receiveMsg', (message: any) => {
      console.log('New message received:', message);
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, message]);
    });

    this.socket.on("Initiation", ({chatId,notification}) => {
      this.socketListener.next(notification)
    });


    this.socket.on("Approval", ({notification}) => {
      this.socketListener.next(notification)
    });


    this.socket.on("Rejection", ({notification}) => {
      this.socketListener.next(notification)
    });


    this.socket.on("Updation", ({notification}) => {
      this.socketListener.next(notification)
    });

    this.socket.on("Completion", ({notification}) => {
      this.socketListener.next(notification)
    });

    // Handle errors
    this.socket.on('connect_error', (error: any) => {
      console.error('WebSocket connection error:', error);
    });
  }

  // Join a chat room
  joinChatRoom(chatId: string): void {
    this.socket.emit('loadChat', {chatId});
    this.socket.on('chatLoaded', ({ message }: any) => {
      console.log('Chat loaded:', message);
      this.messagesSubject.next(message);
    });
  }

  // Send a message
  sendMessage(chatId: string, text: string): void {
    const messageData = { chatId, text };
    this.socket.emit('sendMsg', messageData);
    console.log('Message sent:', messageData);
  }

  // Disconnect the socket
  disconnectSocket(): void {
    if (this.socket) {
      this.socket.disconnect();
      console.log('Disconnected from WebSocket server');
    }
  }

  // Change Password
changePassword(currentPassword: string, newPassword: string): Observable<void> {  
  return this.http.put<void>(
    `${this.apiUrl}/update-password`, 
    { currentPassword, newPassword }
  ).pipe(
    catchError((error) => throwError(() => error))
  );
}

// Update Profile
updateProfile(role: string, profileData: any): Observable<any> {
  return this.http.put<any>(
    `${this.apiUrl}/update-profile?role=${role}`, 
    profileData,
  ).pipe(
    catchError((error) => throwError(() => error))
  );
}

// Contact Us
contactUs(data:any): Observable<void> {
  return this.http.post(`${this.apiUrl}/contact-us`, data).pipe(
    map((response: any) => {}),
    catchError((error) => throwError(() => error))
  );
}

listAllProjects(role: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/project/list-all?role=${role}`).pipe(
    map((response: any) => response.projects), // Extract the projects from the response
    catchError((error) => throwError(() => error))
  );
}


listAllContractors(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/list-all-contractors`).pipe(
    map((response: any) => response.contractors), // Extract the contractors from the response
    catchError((error) => throwError(() => error))
  );
}

getContractorDetails(contractorId: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/show-contractor/${contractorId}`).pipe(
    map((response: any) => response.contractor),
    catchError((error) => throwError(() => error))
  );
}

createProject(contractorId: string, projectData: any, designDocument: File): Observable<any> {
  const formData = new FormData();

  // Append form data
  formData.append('projectName', projectData.projectName);
  formData.append('projectLocation', projectData.projectLocation);
  formData.append('projectType', projectData.projectType);
  formData.append('projectStartDate', projectData.projectStartDate);
  formData.append('estimatedBudget', projectData.estimatedBudget.toString());
  formData.append('projectDuration', projectData.projectDuration.toString());
  formData.append('objectives', projectData.objectives);

  if (projectData.notes) {
    formData.append('notes', projectData.notes);
  }

  // Append the design document file
  formData.append('designDocument', designDocument);

  return this.http.post(`${this.apiUrl}/project/create/${contractorId}`, formData).pipe(
    catchError((error) => throwError(() => error))
  );
}

// Real-Time Update
realTimeUpdate(projectId: string, completion?: any, image?: File): Observable<any> {
  const formData = new FormData();

  // Append form data
  if (completion !== undefined) {
    formData.append('completion', completion.toString());
  }
  if (image) {
    formData.append('image', image);
  }

  return this.http.post<any>(`${this.apiUrl}/project/real-time-update/${projectId}`, formData).pipe(
    map((response) => {
      // Optionally map the response if needed
      return response;
    }),
    catchError((error) => throwError(() => error))
  );
}

// Show Project Detail
showProjectDetail(projectId: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/project/details/${projectId}`).pipe(
    map((response) => {
      return response;
    }),
    catchError((error) => throwError(() => error))
  );
}

getNotifications(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/notifications`).pipe(
    map((response) => {
      return response;
    }),
    catchError((error) => throwError(() => error))
  );
}

requestProject(projectId: string, choice: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/project/request/${projectId}?choice=${choice}`, {}).pipe(
    map((response: any) => {
      return response;
    }),
    catchError((error) => throwError(() => error))
  );
}

costEstimate(data:any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/cost-estimate`, data).pipe(
    map((response: any) => {
      return response;
    }),
    catchError((error) => throwError(() => error))
  );
}


}

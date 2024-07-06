import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UsersService', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    describe('addUser', () => {
        it('should add a new user to the service', async () => {
            const newUser = { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password' };

            const result = await service.addUser(newUser);
            expect(result).toEqual('User added successfully'); // Check if addUser returns the correct message
        });

        it('should handle errors when adding a user', async () => {
            const existingUser = { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password' };

            // Adding the same user twice should handle an error
            await service.addUser(existingUser);
            const result = await service.addUser(existingUser);

            expect(result).toEqual('User already exists'); // Check if addUser handles existing user scenario
        });

        it('should handle validation when adding a user', async () => {
            const invalidUser = { id: 1, email: 'invalid-email' };

            try {
                await service.addUser(invalidUser);
            } catch (error) {
                expect(error.message).toEqual('Validation failed: Invalid email'); // Check if addUser throws correct validation error
            }
        });

        // Add more tests for addUser if needed
    });

    describe('getUser', () => {
        it('should return the correct user from the service', async () => {
            const usersToAdd = [
                { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password123' },
            ];

            for (const user of usersToAdd) {
                await service.addUser(user);
            }

            const userId = 2; // ID of the user we want to retrieve
            const result = await service.getUser(userId);

            expect(result).toEqual(usersToAdd[1]); // Check if correct user is returned
        });

        it('should handle user not found scenario', async () => {
            const nonExistingUserId = 999;

            const result = await service.getUser(nonExistingUserId);

            expect(result).toBeUndefined(); // Check if getUser returns undefined when user is not found
        });

        it('should handle empty user list scenario', async () => {
            const userId = 1;

            const result = await service.getUser(userId);

            expect(result).toBeUndefined(); 
        });

    });

});

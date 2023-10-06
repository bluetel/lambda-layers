"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const request = async (url, headers, method, body) => {
    const config = {
        method: method ?? 'POST',
        url,
        headers: {
            'Content-Type': 'application/json',
            ...(headers ?? {}),
        },
        data: method === 'POST' && body ? body : undefined,
    };
    const response = await (0, axios_1.default)(config);
    return response.data;
};
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWxheWVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYW1iZGEtbGF5ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFpRDtBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQzFCLEdBQVcsRUFDWCxPQUFtQyxFQUNuQyxNQUEwQyxFQUMxQyxJQUFVLEVBQ3VCLEVBQUU7SUFDbkMsTUFBTSxNQUFNLEdBQXVCO1FBQ2pDLE1BQU0sRUFBRSxNQUFNLElBQUksTUFBTTtRQUN4QixHQUFHO1FBQ0gsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksRUFBRSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ25ELENBQUE7SUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsZUFBSyxFQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3BDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQTtBQUN0QixDQUFDLENBQUE7QUFqQlksUUFBQSxPQUFPLFdBaUJuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSBhc3luYyAoXG4gIHVybDogc3RyaW5nLFxuICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSxcbiAgbWV0aG9kPzogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnLFxuICBib2R5PzogYW55XG4pOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0+IHtcbiAgY29uc3QgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgbWV0aG9kOiBtZXRob2QgPz8gJ1BPU1QnLFxuICAgIHVybCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKGhlYWRlcnMgPz8ge30pLFxuICAgIH0sXG4gICAgZGF0YTogbWV0aG9kID09PSAnUE9TVCcgJiYgYm9keSA/IGJvZHkgOiB1bmRlZmluZWQsXG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhjb25maWcpXG4gIHJldHVybiByZXNwb25zZS5kYXRhXG59XG4iXX0=